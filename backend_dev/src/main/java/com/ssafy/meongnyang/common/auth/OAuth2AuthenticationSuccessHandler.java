package com.ssafy.meongnyang.common.auth;

import java.io.IOException;
import java.time.Duration;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ssafy.meongnyang.common.exception.handler.UserNotFoundException;
import com.ssafy.meongnyang.common.util.RedisService;
import com.ssafy.meongnyang.common.util.TokenProvider;
import com.ssafy.meongnyang.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

@Slf4j
@Component
@RequiredArgsConstructor
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final TokenProvider tokenProvider;
    private final UserRepository userRepository;
    private final RedisService redisService;
    private final Environment env;

    @Override
    @Transactional
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {

//        login 성공한 사용자
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        Long id = Long.valueOf(String.valueOf(oAuth2User.getAttributes().get("id")));

        String accessToken = tokenProvider.createAccessToken(id);
        String refreshToken = tokenProvider.createRefreshToken(id);

        userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다."));

        redisService.setValues(id, refreshToken, Duration.ofDays(7));

        String url = makeRedirectUrl(accessToken, refreshToken);

        if (response.isCommitted()) {
            log.debug("응답이 이미 커밋된 상태입니다. " + url + "로 리다이렉트하도록 바꿀 수 없습니다.");
            return;
        }

        getRedirectStrategy().sendRedirect(request, response, url);
    }

    private String makeRedirectUrl(String accessToken, String refreshToken) {
        return UriComponentsBuilder.fromUriString(env.getProperty("front.url"))
                .queryParam("accessToken", accessToken)
                .queryParam("refreshToken", refreshToken)
                .build().toUriString();
    }
}
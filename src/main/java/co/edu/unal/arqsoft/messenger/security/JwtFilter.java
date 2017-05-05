package co.edu.unal.arqsoft.messenger.security;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import javax.servlet.RequestDispatcher;

/**
 *
 * @author alex
 */
public class JwtFilter implements Filter {
    
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        if (req instanceof HttpServletRequest) {
            HttpServletRequest r = (HttpServletRequest) req;
            String sp = r.getServletPath();
            if (sp.equals("/auth")) { 
                chain.doFilter(req, res);
            } else {
                try {
                    String token = r.getHeader("Authorization").substring(7);
                    Jwts.parser().setSigningKey(SecurityConfig.key).parseClaimsJws(token);
                    chain.doFilter(req, res);
                } catch (SignatureException ex) {
                    HttpServletResponse re = (HttpServletResponse)res;
                    re.sendError(401);
                } catch (Exception ex){
                    HttpServletResponse re = (HttpServletResponse)res;
                    re.sendError(401);
                }
            }
        } else {
            HttpServletResponse re = (HttpServletResponse)res;
            re.sendError(401);
        }
    }

    public void init(FilterConfig filterConfig) {
    }

    public void destroy() {
    }

}

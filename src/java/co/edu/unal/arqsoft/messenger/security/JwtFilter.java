package co.edu.unal.arqsoft.messenger.security;

import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
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
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;
import javax.servlet.RequestDispatcher;

/**
 *
 * @author alex
 */
public class JwtFilter implements Filter {
 
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse rs = (HttpServletResponse)res;
        if (req instanceof HttpServletRequest) {
            HttpServletRequest rq = (HttpServletRequest) req;
            String sp = rq.getServletPath();
            
            if (sp.equals("/login") || sp.equals("/messenger")){
                rs.sendRedirect("/");
            }
            
            if (sp.equals("/auth")) { 
                chain.doFilter(req, res);
            } 
            else if (sp.equals("/mostrar-eventos")) { 
                chain.doFilter(req, res);  
            } 
            else {
                try {
                    String token = rq.getHeader("Authorization").substring(7);
                    Jws<Claims> claims = Jwts.parser()
                            .setSigningKey(SecurityConfig.key)
                            .parseClaimsJws(token);
                    chain.doFilter(req, res);
                } catch (SignatureException ex) {
                    rs.sendError(401);
                } catch (Exception ex){
                    rs.sendError(401);
                }
            }
        } else {
            rs.sendError(401);
        }
    }

    public void init(FilterConfig filterConfig) {
    }

    public void destroy() {
    }
    
    public static UserDTO extractUser(HttpServletRequest req) {
        String token = req.getHeader("Authorization").substring(7);
        Jws<Claims> claims = Jwts.parser()
                .setSigningKey(SecurityConfig.key)
                .parseClaimsJws(token);
        UserDTO u = new UserDTO();
        u.id = Integer.parseInt(claims.getBody().getSubject());
        u.name = (String)claims.getBody().get("name");
        u.email = (String)claims.getBody().get("email");
        u.password = (String)claims.getBody().get("password");
        return u;
    }

}

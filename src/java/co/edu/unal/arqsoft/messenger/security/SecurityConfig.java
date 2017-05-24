package co.edu.unal.arqsoft.messenger.security;

import io.jsonwebtoken.impl.crypto.MacProvider;
import java.security.Key;
import javax.ejb.Singleton;

/**
 *
 * @author alex
 */
@Singleton
public class SecurityConfig {
    public static final Key key = MacProvider.generateKey();
}

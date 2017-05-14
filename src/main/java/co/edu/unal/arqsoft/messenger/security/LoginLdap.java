package co.edu.unal.arqsoft.messenger.security;

import com.novell.ldap.LDAPConnection;
import com.novell.ldap.LDAPException;
import java.io.UnsupportedEncodingException;

/**
 *
 * @author alex
 */
public class LoginLdap {
    private LDAPConnection lc = new LDAPConnection();

    public String login(String user, String password){

        if (connect()) {
            if (validatePassword(user, password)) {
                return "OK";
            } else {
                return "Usuario y/o contraseña incorrectos.";
            }
        } else {
            return "Conexión al servidor LDAP fallida.";
        }
    }

    public Boolean connect(){

        String ldapHost = "127.0.0.1";
        String dn = "cn=admin,dc=arqsoft,dc=unal,dc=edu,dc=co";
        String password = "arqsoft2017i";

        int ldapPort =  LDAPConnection.DEFAULT_PORT;
        int ldapVersion = LDAPConnection.LDAP_V3;

        try {
            lc.connect(ldapHost, ldapPort);
            System.out.println("==== Conectado al servidor LDAP ====");
            lc.bind(ldapVersion, dn, password.getBytes("UTF8"));
            System.out.println("==== Autenticado en el servidor ====");
            return true;
        } catch (LDAPException | UnsupportedEncodingException ex) {
            System.out.println("==== ERROR al conectarse al servidor LDAP ====");
            return false;
        }

    }

    public Boolean validatePassword(String user, String password){

        String dn = "cn=" + user + ",ou=messenger,dc=arqsoft,dc=unal,dc=edu,dc=co";

        try {
            lc.bind(dn, password);
            System.out.println("==== Contraseña validada ====");
            return true;
        } catch (LDAPException ex) {
            System.out.println("==== ERROR al validar la contraseña ====");
            return false;
        }
    }
}

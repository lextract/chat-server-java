package co.edu.unal.arqsoft.messenger.security;

import co.edu.unal.arqsoft.messenger.dto.ResultDTO;
import com.novell.ldap.LDAPAttribute;
import com.novell.ldap.LDAPAttributeSet;
import com.novell.ldap.LDAPConnection;
import com.novell.ldap.LDAPEntry;
import com.novell.ldap.LDAPException;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;

/**
 *
 * @author alex
 */
public class LdapManager {

    private LDAPConnection lc = new LDAPConnection();

    public ResultDTO login(String user, String password) {
        ResultDTO r = new ResultDTO();
        if (connect()) {
            if (validatePassword(user, password)) {
                r.result = "OK";
            } else {
                r.result = "ERROR";
                r.message = "Usuario y/o contraseña incorrectos.";
            }
        } else {
            r.result = "ERROR";
            r.message = "Conexión al servidor LDAP fallida.";
        }
        return r;
    }

    public Boolean connect() {

        String ldapHost = "192.168.2.15";
        String dn = "cn=admin,dc=arqsoft,dc=unal,dc=edu,dc=co";
        String password = "arqsoft2017i";

        int ldapPort = LDAPConnection.DEFAULT_PORT;
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

    public Boolean validatePassword(String user, String password) {

        String dn = "cn=" + user + ",ou=Messenger,dc=arqsoft,dc=unal,dc=edu,dc=co";

        try {
            lc.bind(dn, password);
            System.out.println("==== Contraseña validada ====");
            return true;
        } catch (LDAPException ex) {
            System.out.println("==== ERROR al validar la contraseña ====");
            return false;
        }
    }

    public ResultDTO createUser(String emailUser, String passwordUser, String firstnameUser, String lastnameUser) {
        String dn = "cn=" + emailUser + ",ou=Messenger,dc=arqsoft,dc=unal,dc=edu,dc=co";

        LDAPAttributeSet setAtr = new LDAPAttributeSet();
        setAtr.add(new LDAPAttribute("objectclass", "inetOrgPerson")); // *
        setAtr.add(new LDAPAttribute("objectclass", "posixAccount")); // *
        setAtr.add(new LDAPAttribute("objectclass", "top")); // *
        setAtr.add(new LDAPAttribute("cn", emailUser)); // email
        setAtr.add(new LDAPAttribute("userpassword", passwordUser)); // 
        setAtr.add(new LDAPAttribute("givenname", firstnameUser)); // nombres
        setAtr.add(new LDAPAttribute("sn", lastnameUser)); // apellidos

        LDAPEntry userEntry = new LDAPEntry(dn, setAtr);
        ResultDTO r = new ResultDTO();

        if (connect()) {
            try {
                lc.add(userEntry);
                lc.disconnect();
                r.result = "OK";
            } catch (LDAPException ex) {
                if (ex.getResultCode() == 68) {
                    r.exception = true;
                    r.result = "ERROR";
                    r.message = "El Usuario ya se encuentra ingresado";
                }
                r.exception = true;
                r.result = "ERROR";
                r.message = "El usuario no se pudo agregar";
            }
        } else {
            r.exception = true;
            r.result = "ERROR";
            r.message = "Conexión al servidor LDAP fallida.";
        }

        return r;
    }
    
    public static String hashPassword(String password){
        try{
            byte[] e = MessageDigest.getInstance("MD5").digest(password.getBytes());
            String h = e.toString();
            System.out.println("HASH DE CONTRSEÑA: " +  h);
            return h;
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return null;
    }

}

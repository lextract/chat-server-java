package co.edu.unal.arqsoft.messenger.businesslogic;

import co.edu.unal.arqsoft.messenger.dao.AuthDAO;
import co.edu.unal.arqsoft.messenger.dao.UserDAO;
import co.edu.unal.arqsoft.messenger.dto.ResultDTO;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.model.Auth;
import co.edu.unal.arqsoft.messenger.model.User;
import co.edu.unal.arqsoft.messenger.security.LdapManager;


/**
 *
 * @author alex
 */
public class AuthBL {

    public static ResultDTO login(String email, String password) {
        // TODO: validar datos ingresados, arrojar exepcion en caso de ser invalidos
        ResultDTO r = new ResultDTO();
        AuthDAO dao = new AuthDAO();
        UserDTO user = dao.validateUser(email, password);
        if (user.id == 0){
            r.message = "Usuario o contraseña incorrectos";
            r.result = "ERROR";
        }
        else {
            r.data = user;
            r.result = "OK";
        }
        return r;
    }

    public static ResultDTO loginLdap(String email, String password) {
        // TODO: validar datos ingresados, arrojar exepcion en caso de ser invalidos
        LdapManager lm = new LdapManager();
        UserDTO user = new UserDTO();
        // TODO: hash password
        
        ResultDTO r = lm.login(email, LdapManager.hashPassword(password));
        if (r.result.equals("OK")) {
            UserDAO daoUser = new UserDAO();
            r.data = daoUser.find(email);
        }
        return r;
    }

    public static User register(UserDTO user) {
        // TODO: validar datos ingresados, arrojar exepcion en caso de ser invalidos
        UserDAO daoUser = new UserDAO();
        User u = new User();
        u.setEmail(user.email);
        u.setName(user.name);
        daoUser.create(u);

        AuthDAO dao = new AuthDAO();
        Auth auth = dao.create(u.getId(), user.password);

        return u;
    }

    public static ResultDTO registerLdap(UserDTO user) {
        // TODO: validar datos ingresados, arrojar exepcion en caso de ser invalidos
        // TODO: hash password
        LdapManager lm = new LdapManager();
        ResultDTO r = lm.createUser(user.email, LdapManager.hashPassword(user.password), user.name, user.name);
        if (r.result.equals("OK")) {
            UserDAO daoUser = new UserDAO();
            User u = new User();
            u.setEmail(user.email);
            u.setName(user.name);
            daoUser.create(u);
        }
        return r;
    }
    
}

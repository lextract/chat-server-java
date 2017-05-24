package co.edu.unal.arqsoft.messenger.dao;

import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.model.Auth;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

/**
 *
 * @author alex
 */
public class AuthDAO {
    
    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("MessengerPU");
    
    public UserDTO validateUser(String email, String password){
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        UserDTO user = new UserDTO();
        try {
            ut.begin();
            String query = "select u.id, u.name from User u inner join Auth a on u.id = a.idUser "+
                    "where u.Email = '" + email + "' and a.password = '" + password + "';";
            Object[] sr = (Object[])em.createNativeQuery(query).getSingleResult();
            user.id = Integer.parseInt(sr[0].toString());
            user.name = sr[1].toString();
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: validando login");
            System.out.println(ex);
            ut.rollback();
        }
        return user;
    }
    
    public Auth create(int idUser, String password){
        Auth auth = new Auth(idUser, password);
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        try {
            ut.begin();
            em.persist(auth);
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: creando auth");
            System.out.println(ex);
            ut.rollback();
        }
        return auth;
    }
}

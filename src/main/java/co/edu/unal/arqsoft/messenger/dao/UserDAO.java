package co.edu.unal.arqsoft.messenger.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import co.edu.unal.arqsoft.messenger.model.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityTransaction;
//import javax.transaction.UserTransaction;

/**
 *
 * @author alex
 */
public class UserDAO {
    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("MessengerPU");

    public User create(User user){
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        try {
            ut.begin();
            em.persist(user);
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: creando usuario");
            System.out.println(ex);
            ut.rollback();
        }
        return user;
    }
    
    public List<User> getFriends(int idUser){
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        
        List<User> friends = new ArrayList<User>();
        try {
            ut.begin();
            String query = "select id, name from User where id <> " + idUser + ";";
            List<Object[]> rs = em.createNativeQuery(query).getResultList();
            for (Object[] row : rs){
                friends.add(new User(Integer.parseInt(row[0].toString()),row[1].toString(),""));
            }
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: listando amigos");
            System.out.println(ex);
            ut.rollback();
        }
        return friends;
    }
}

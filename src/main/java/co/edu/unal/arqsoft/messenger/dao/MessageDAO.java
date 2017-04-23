package co.edu.unal.arqsoft.messenger.dao;

import co.edu.unal.arqsoft.messenger.model.Message;
import co.edu.unal.arqsoft.messenger.model.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

/**
 *
 * @author alex
 */
public class MessageDAO {
    public EntityManagerFactory emf = Persistence.createEntityManagerFactory("MessengerPU");

    public Message create(Message message) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        try {
            ut.begin();
            em.persist(message);
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: creando mensaje");
            System.out.println(ex);
            ut.rollback();
        }
        return message;
    }
    
    public List<Message> messages(int idConv){
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        List<Message> messages = new ArrayList<Message>();
        try {
            ut.begin();
            String query = "select id, text from Message where idConversation =" + idConv + ";";
            List<Object[]> rs = em.createNativeQuery(query).getResultList();
            for (Object[] row : rs){
                messages.add(new Message(Integer.parseInt(row[0].toString()),row[1].toString(),null));
            }
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: listando mensajes por conversacion");
            System.out.println(ex);
            ut.rollback();
        }
        return messages;
    }
    
}

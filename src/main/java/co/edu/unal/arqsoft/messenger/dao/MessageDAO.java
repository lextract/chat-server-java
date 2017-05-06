package co.edu.unal.arqsoft.messenger.dao;

import co.edu.unal.arqsoft.messenger.dto.MessageDTO;
import co.edu.unal.arqsoft.messenger.model.Message;
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
    
    public List<MessageDTO> messages(int idConv){
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        List<MessageDTO> messages = new ArrayList<MessageDTO>();
        try {
            ut.begin();
            String query = "select m.id, m.text, u.name from Message m "
                +"inner join User u on u.id = m.idUser "
                +"where m.idConversation =" + idConv + ";";
            List<Object[]> rs = em.createNativeQuery(query).getResultList();
            for (Object[] row : rs){
                MessageDTO m = new MessageDTO();
                m.id = Integer.parseInt(row[0].toString());
                m.text = row[1].toString();
                m.userName = row[2].toString();
                messages.add(m);
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

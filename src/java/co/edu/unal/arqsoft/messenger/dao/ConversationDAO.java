package co.edu.unal.arqsoft.messenger.dao;

import co.edu.unal.arqsoft.messenger.dto.ConversationDTO;
import co.edu.unal.arqsoft.messenger.model.Conversation;
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
public class ConversationDAO {

    public EntityManagerFactory emf = Persistence.createEntityManagerFactory("MessengerPU");

    public Conversation create(Conversation conv) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        try {
            ut.begin();
            em.persist(conv);
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: creando conversacion");
            System.out.println(ex);
            ut.rollback();
        }
        return conv;
    }

    public int addUsers(int idConv, String[] idsUsers) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        int added = 0;
        try {
            String values = "";
            for (int i = 0; i < idsUsers.length - 1; i++) {
                values += "(" + idConv + "," + idsUsers[i] + "),";
            }
            values += "(" + idConv + "," + idsUsers[idsUsers.length - 1] + ")";
            values = "insert into ConversationUser(idConversation, idUser) values " + values;
            ut.begin();
            added = em.createNativeQuery(values).executeUpdate();
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: agregando usuarios");
            System.out.println(ex);
            ut.rollback();
        }
        return added;
    }

    public List<ConversationDTO> conversations(int idUser) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        List<ConversationDTO> convs = new ArrayList<ConversationDTO>();
        try {
            ut.begin();
            String query = "select c.Id, c.Name, m.Text from Conversation c "
                + "inner join ConversationUser cu on cu.IdConversation = c.Id and cu.IdUser = " + idUser
                + " left join Message m on m.Id = c.IdLastMessage;";
            List<Object[]> rs = em.createNativeQuery(query).getResultList();
            for (Object[] row : rs){
                ConversationDTO conv = new ConversationDTO();
                conv.id = Integer.parseInt(row[0].toString());
                conv.name = row[1].toString();
                conv.lastMessageText = row[2] == null ? "" : row[2].toString();
                convs.add(conv);
            }
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: listando conversaciones por usuario");
            System.out.println(ex);
            ut.rollback();
        }
        return convs;
    }
    
    public void updateLastMessage(int idConv, int idLastMessage){
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        try {
            ut.begin();
            String query = "update Conversation set idLastMessage=" + idLastMessage
                + " where id=" + idConv + ";";
            em.createNativeQuery(query).executeUpdate();
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: Actualizando conversacion");
            System.out.println(ex);
            ut.rollback();
        }
    }
    
    public List<Integer> usersByConv(int idConversation) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction ut = em.getTransaction();
        List<Integer> ids = new ArrayList<Integer>();
        try {
            ut.begin();
            String query = "select IdUser from ConversationUser where IdConversation = "
                + idConversation + ";";
            List<Object> rs = em.createNativeQuery(query).getResultList();
            for (Object row : rs){
                ids.add(Integer.parseInt(row.toString()));
            }
            ut.commit();
        } catch (Exception ex) {
            System.out.println("ERROR DAO: listando conversaciones por usuario");
            System.out.println(ex);
            ut.rollback();
        }
        return ids;
    }
}

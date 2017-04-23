/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.dao;

import co.edu.unal.arqsoft.messenger.dto.ConversationDTO;
import co.edu.unal.arqsoft.messenger.model.Conversation;
import co.edu.unal.arqsoft.messenger.model.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
//import javax.persistence.PersistenceContext;

//import javax.transaction.UserTransaction;
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
                conv.lastMessageText = row[1].toString();
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
}
//    //@PersistenceContext
//    EntityManager em;
//    
//    public Conversation persist(Conversation conversation){
//        //em.getTransaction().begin();
//        //em.gettr
//        em.persist(conversation);
//        //em.getTransaction().commit();
//        return conversation;
//    }


//public Conversation persist(Conversation conversation) {
//        EntityManager em = emf.createEntityManager();
//        em.getTransaction().begin();
//        try {
//            em.persist(conversation);
//            em.getTransaction().commit();
//        } catch (Exception e) {
//            e.printStackTrace();
//            em.getTransaction().rollback();
//        } finally {
//            em.close();
//        }
//        return conversation;
//    }
//
//    public List<User> usersConversation(int idConversation) {
//
//        System.out.println("ENTRO AL DAO");
//        EntityManager em = emf.createEntityManager();
//        //em.merge(User.class);
//        EntityTransaction ut = em.getTransaction();
//        List<User> users = new ArrayList<User>();
//        try {
//            System.out.println("ENTRO AL DAO TRYYYYYYYYYYYYY");
//            ut.begin();
//            //users = em.createQuery("SELECT p FROM User p").getResultList(); 
//            //users = em.createNamedQuery("User.findAll", User.class).getResultList();
//            users = em.createNativeQuery("SELECT u.Id, u.Name, u.Email FROM User AS u").getResultList();
//
//            ut.commit();
//        } catch (Exception ex) {
//            System.out.println(ex);
//            if (ut == null) {
//                System.out.println("EL UT ESTA NULO");
//            } else {
//                System.out.println("NOOOOOOOOOOOOO esta NULO");
//            }
//            ut.rollback();
//        }
//        return users;
//    }
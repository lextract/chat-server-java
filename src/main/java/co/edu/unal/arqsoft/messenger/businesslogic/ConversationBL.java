/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.businesslogic;

import co.edu.unal.arqsoft.messenger.dao.ConversationDAO;
import co.edu.unal.arqsoft.messenger.dto.ConversationDTO;
import co.edu.unal.arqsoft.messenger.model.Conversation;
import co.edu.unal.arqsoft.messenger.model.User;
import java.util.Date;
import java.util.List;

/**
 *
 * @author alex
 */
public class ConversationBL {
    
    public static Conversation create(Conversation conversation){
        ConversationDAO dao = new ConversationDAO();
        conversation.setCreatedDate(new Date());
        dao.create(conversation);
        return conversation;
    }
    
    public static List<ConversationDTO> conversations(int idUser){
        ConversationDAO dao = new ConversationDAO();
        return dao.conversations(idUser);
    }
    
    public static int addUsers(int idConv, String idsUsers){
        
        String[] ids = idsUsers.split(",");
        // TODO: por cada id validar expresion regular numero entero, arrojar exepcion en caso de ser invalido
       ConversationDAO dao = new ConversationDAO();
       return dao.addUsers(idConv, ids);
    }
    
//    public static List<User> usersConversation(int idConversation){
//        ConversationDAO dao = new ConversationDAO();
//        return dao.usersConversation(idConversation);
//    }
    
}

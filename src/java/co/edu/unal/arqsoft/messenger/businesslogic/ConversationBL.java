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
    
    public static ConversationDTO create(ConversationDTO conversation){
        ConversationDAO dao = new ConversationDAO();
        Conversation conv = new Conversation();
        conv.setCreatedDate(new Date());
        conv.setIdCreator(new User(conversation.idCreator));
        conv.setName(conversation.name);
        dao.create(conv);
        addUsers(conv.getId(), conversation.usersIds);
        addUsers(conv.getId(), String.valueOf(conversation.idCreator));
        conversation.id = conv.getId();
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
    
    public static void updateLastMessage(int idConv, int idLastMessage){
        ConversationDAO dao = new ConversationDAO();
        dao.updateLastMessage(idConv, idLastMessage);
    }
    
    //public static
    
    public static List<Integer> usersConversation(int idConversation){
        ConversationDAO dao = new ConversationDAO();
        return dao.usersByConv(idConversation);
    }
    
}

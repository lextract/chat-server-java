package co.edu.unal.arqsoft.messenger.businesslogic;

import co.edu.unal.arqsoft.messenger.dao.MessageDAO;
import co.edu.unal.arqsoft.messenger.dto.MessageDTO;
import co.edu.unal.arqsoft.messenger.model.Message;
import java.util.Date;
import java.util.List;

/**
 *
 * @author alex
 */
public class MessageBL {

    public static Message create(Message message) {
        // TODO: validar, solo texto es esperado, expresion regular
        MessageDAO dao = new MessageDAO();
        message.setDate(new Date());
        dao.create(message);
        ConversationBL.updateLastMessage(message.getIdConversation().getId(), message.getId());
        return message;
    }

    public static List<MessageDTO> messages(int idConv) {
        MessageDAO dao = new MessageDAO();
        return dao.messages(idConv);
    }
}

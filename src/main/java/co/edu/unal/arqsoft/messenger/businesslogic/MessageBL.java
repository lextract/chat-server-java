package co.edu.unal.arqsoft.messenger.businesslogic;

import co.edu.unal.arqsoft.messenger.dao.MessageDAO;
import co.edu.unal.arqsoft.messenger.model.Message;
import java.util.List;

/**
 *
 * @author alex
 */
public class MessageBL {

    public static Message create(Message message) {
        // TODO: validar, solo texto es esperado, expresion regular
        MessageDAO dao = new MessageDAO();
        return dao.create(message);
    }

    public static List<Message> messages(int idConv) {
        MessageDAO dao = new MessageDAO();
        return dao.messages(idConv);
    }
}

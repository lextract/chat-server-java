package co.edu.unal.arqsoft.messenger.soap;

import co.edu.unal.arqsoft.messenger.businesslogic.ConversationBL;
import co.edu.unal.arqsoft.messenger.dto.ConversationDTO;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author alex
 */
@WebService(serviceName = "ConversationWS")
public class ConversationWS {

    @WebMethod(operationName = "conversationsByUser")
    public List<ConversationDTO> conversationsByUser(@WebParam(name = "idUser") int idUser){
        List<ConversationDTO> convs = ConversationBL.conversations(idUser);
        return convs;
    }
}

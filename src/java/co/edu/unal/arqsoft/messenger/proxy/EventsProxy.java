/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.proxy;

import esr.bus.Event;
import java.util.List;
import javax.xml.ws.Holder;

/**
 *
 * @author alex
 */
public class EventsProxy {

    // email: usuario logeado
    // password: usuario logeado
    // userId: el de la tabla
    public static List<Event> friendsEventsESBOperation(
            java.lang.String email, java.lang.String password, int userId
    ) {
        javax.xml.ws.Holder<Boolean> authenticationSuccess = new Holder<>();
        javax.xml.ws.Holder<esr.bus.GetFriendsResponse> friends = new Holder<>();
        javax.xml.ws.Holder<esr.bus.PrivateEventsResponse> privateEvents = new Holder<>();
        
        esr.bus.FriendsEventsESBService service = new esr.bus.FriendsEventsESBService();
        esr.bus.FriendsEventsESBPortType port = service.getFriendsEventsESBPort();
        port.friendsEventsESBOperation(email, password, userId, authenticationSuccess,
                friends, privateEvents);
        
        return privateEvents.value.getReturn();
    }

    // idEvento
    // idPersonaQuienInvita
    // idPersonaQueEsInvitada
    public static boolean linkEvent(Integer idEvent, Integer idHost, Integer idGuest) {
        esr.eventos.EventAccess_Service service = new esr.eventos.EventAccess_Service();
        esr.eventos.EventAccess port = service.getEventAccessPort();
        return port.linkEvent(idEvent, idHost, idGuest).contains("exitosamente");
    }
    
    

}

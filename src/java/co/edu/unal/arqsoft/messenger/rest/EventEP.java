package co.edu.unal.arqsoft.messenger.rest;

import co.edu.unal.arqsoft.messenger.businesslogic.EventBL;
import co.edu.unal.arqsoft.messenger.dto.InvitationDTO;
import co.edu.unal.arqsoft.messenger.dto.ResultDTO;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.proxy.EventsProxy;
import co.edu.unal.arqsoft.messenger.security.JwtFilter;
import esr.bus.Event;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alex
 */
@RestController
@RequestMapping(value = "/event")
public class EventEP {
    
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getEvents(HttpServletRequest req) {
        try {
            
            UserDTO u = JwtFilter.extractUser(req);
            List<Event> evs = EventsProxy.friendsEventsESBOperation(u.email, "12345678", u.id);
            //List<Event> events = eventos();
            return new ResponseEntity<>(evs, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    
    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> inviteEvent(HttpServletRequest req, @RequestBody InvitationDTO inv) {
        try {
            //List<Event> events = eventos();
            System.out.println("IMPRIMIENDO CONVERSAIONC");
            System.out.println(inv.idConversation);
            UserDTO u = JwtFilter.extractUser(req);
            //int c = 
            //String r = "{idConversation:"+inv.idConversation+",idEvent:"+inv.idEvent+"}";
            ResultDTO r = new ResultDTO();
            r.result = "OK";
            r.data = EventBL.inviteFriends(inv.idEvent, inv.idConversation, u);
            return new ResponseEntity<>(r, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//    static List<Event> eventos2(){
//        
//        try { // Call Web Service Operation
//            org.netbeans.j2ee.wsdl.friendseventsbpelmodule.src.friendseventsesb.FriendsEventsESBService service = new org.netbeans.j2ee.wsdl.friendseventsbpelmodule.src.friendseventsesb.FriendsEventsESBService();
//            org.netbeans.j2ee.wsdl.friendseventsbpelmodule.src.friendseventsesb.FriendsEventsESBPortType port = service.getFriendsEventsESBPort();
//            // TODO initialize WS operation arguments here
//            java.lang.String email = "";
//            java.lang.String password = "";
//            int userId = 0;
//            javax.xml.ws.Holder<Boolean> authenticationSuccess = new javax.xml.ws.Holder<Boolean>();
//            javax.xml.ws.Holder<businesslogic.service.GetFriendsResponse> friends = new javax.xml.ws.Holder<businesslogic.service.GetFriendsResponse>();
//            javax.xml.ws.Holder<businesslogic.service.PrivateEventsResponse> privateEvents = new javax.xml.ws.Holder<businesslogic.service.PrivateEventsResponse>();
//            port.friendsEventsESBOperation(email, password, userId, authenticationSuccess, friends, privateEvents);
//            
//            //friends.value.getReturn().get(0).get
//            //return privateEvents.value.getReturn();
//        } catch (Exception ex) {
//            // TODO handle custom exceptions here
//        }
//        return null;
//
//    }
//    static List<Event> eventos(){
//        ArrayList<Event> events = new ArrayList<Event>();
//        Event e1 = new Event();
//        e1.setIdEvent(101);
//        e1.setName("Evento basura 1");
//        events.add(e1);
//        Event e2 = new Event();
//        e2.setIdEvent(102);
//        e2.setName("Evento basura 2");
//        events.add(e2);
//        Event e3 = new Event();
//        e3.setIdEvent(103);
//        e3.setName("Evento basura 3");
//        events.add(e3);
//        return events;
//    }
}

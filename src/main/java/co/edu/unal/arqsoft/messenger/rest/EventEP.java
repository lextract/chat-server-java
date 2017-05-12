package co.edu.unal.arqsoft.messenger.rest;

import co.edu.unal.arqsoft.messenger.businesslogic.UserBL;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.model.User;
import co.edu.unal.arqsoft.messenger.security.JwtFilter;
import co.edu.unal.arqsoft.messenger.servicios.Event;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
            List<Event> events = eventos();
            return new ResponseEntity<>(events, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> inviteEvent(HttpServletRequest req) {
        try {
            List<Event> events = eventos();
            return new ResponseEntity<>(events, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    static List<Event> eventos(){
        ArrayList<Event> events = new ArrayList<Event>();
        Event e1 = new Event();
        e1.setName("Evento basura 1");
        events.add(e1);
        Event e2 = new Event();
        e2.setName("Evento basura 2");
        events.add(e2);
        Event e3 = new Event();
        e3.setName("Evento basura 3");
        events.add(e3);
        return events;
    }
}

package co.edu.unal.arqsoft.messenger.rest;

import co.edu.unal.arqsoft.messenger.businesslogic.ConversationBL;
import co.edu.unal.arqsoft.messenger.dto.ConversationDTO;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.security.JwtFilter;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alex
 */
@RestController
@RequestMapping(value = "/conversation")
public class ConversationEP {

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAll(HttpServletRequest req) {
        try {
            UserDTO u = JwtFilter.extractUser(req);
            List<ConversationDTO> convs = ConversationBL.conversations(u.id);
            return new ResponseEntity<>(convs, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> create(HttpServletRequest req, @RequestBody ConversationDTO conversation) {
        try {
            // TODO: validate creator same jwt user
            ConversationBL.create(conversation);
            return new ResponseEntity<>(conversation, HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/{id}/users", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addUsers(
            @PathVariable("id") int id,
            @RequestParam("idsUsers") String idsUsers) {
        try {
            int added = ConversationBL.addUsers(id, idsUsers);
            return new ResponseEntity<Integer>(added, HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

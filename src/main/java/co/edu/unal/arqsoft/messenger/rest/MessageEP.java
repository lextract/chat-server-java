package co.edu.unal.arqsoft.messenger.rest;

import co.edu.unal.arqsoft.messenger.businesslogic.MessageBL;
import co.edu.unal.arqsoft.messenger.dto.MessageDTO;
import co.edu.unal.arqsoft.messenger.model.Message;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
@RequestMapping(value = "/message")
public class MessageEP {

    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> create(@RequestBody Message message) {
        try {
            MessageBL.create(message);
            return new ResponseEntity<>(message, HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAll(@RequestParam("idConv") int idConv) {
        try {
            List<MessageDTO> messages = MessageBL.messages(idConv);
            return new ResponseEntity<>(messages, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.endpoint;

import co.edu.unal.arqsoft.messenger.businesslogic.ConversationBL;
import co.edu.unal.arqsoft.messenger.model.Conversation;
import co.edu.unal.arqsoft.messenger.model.User;
import java.util.Date;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author alex
 */
@RestController
public class ConversationEP {
    @RequestMapping(value = "/conversation/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Conversation> getAll() {
//		List<User> users = userService.findAllUsers();
//		if(users.isEmpty()){
//			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
//		}
//		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
        Conversation conv = new Conversation(258, "la 258", new Date());
        conv.setIdCreator(new User(456));
        return new ResponseEntity<Conversation>(conv, HttpStatus.OK);
    }
    @RequestMapping(value = "/conversation/", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Conversation> createUser(@RequestBody Conversation conversation, UriComponentsBuilder ucBuilder) {
//		System.out.println("Creating User " + user.getName());
//
//		if (userService.isUserExist(user)) {
//			System.out.println("A User with name " + user.getName() + " already exist");
//			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
//		}
//
//		userService.saveUser(user);
//
        try{
            
            conversation.setCreatedDate(new Date());
            ConversationBL.create(conversation);

            return new ResponseEntity<Conversation>(conversation, HttpStatus.CREATED);
        }
        catch( Exception ex){
            return new ResponseEntity<Conversation>(conversation, HttpStatus.NO_CONTENT);
            
        }
        //HttpHeaders headers = new HttpHeaders();
//		headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri());
        
    }
//    @RequestMapping(value = "/conversation/{id}/users/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE )
//    public ResponseEntity<List<User>> getUsersConversation(@PathVariable("id") int id) {
//        System.out.println("el id recibido es: " + id);
//        List<User> retorno = ConversationBL.usersConversation(1);
//        return new ResponseEntity<List<User>>(retorno, HttpStatus.OK);
//    }
}

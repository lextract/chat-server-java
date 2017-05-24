/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unal.arqsoft.messenger.businesslogic;

import esr.bus.Event;
import co.edu.unal.arqsoft.messenger.dto.UserDTO;
import co.edu.unal.arqsoft.messenger.model.Conversation;
import co.edu.unal.arqsoft.messenger.model.Message;
import co.edu.unal.arqsoft.messenger.model.User;
import co.edu.unal.arqsoft.messenger.proxy.EventsProxy;
import java.util.List;

/**
 *
 * @author alex
 */
public class EventBL {
    
    public static int inviteFriends(int idEvent, int idConversation, UserDTO userHost){
        int count = 0;
        List<Integer> ids = ConversationBL.usersConversation(idConversation);
        Event event = findEvent(idEvent, userHost);
        for (Integer id : ids){
            if (id != userHost.id)
                if (EventsProxy.linkEvent(idEvent, userHost.id, id))
                    count++;
        }
        Message m = new Message();
        m.setText(userHost.name + " los ha invitado al evento " + event.getName());
        m.setIdUser(new User(userHost.id));
        m.setIdConversation(new Conversation(idConversation));
        MessageBL.create(m);
        return count;
    }
    
    public static Event findEvent(int idEvent, UserDTO user){
        Event ans = new Event();
        List<Event> evs = EventsProxy.friendsEventsESBOperation(user.email, user.password, user.id);
        for (Event e : evs){
            if(e.getIdEvent() == idEvent){
                ans = e;
                break;
            }
        }
        return ans;
    }
    
}

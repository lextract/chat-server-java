package co.edu.unal.arqsoft.messenger.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.unal.arqsoft.messenger.servicios.*;
import java.util.ArrayList;
import javax.xml.ws.WebServiceRef;
import org.netbeans.j2ee.wsdl.friendseventsbpelmodule.src.friendseventsesb.FriendsEventsESBService;
import businesslogic.service.Event;
/**
 *
 * @author alex
 */
@WebServlet("/mostrar-eventos")
public class MostrarEventos  extends HttpServlet {

    @WebServiceRef(wsdlLocation = "WEB-INF/wsdl/192.168.2.128_9130/friendsEventsESBService/friendsEventsESBPort.wsdl")
    private FriendsEventsESBService service_1;

    //@WebServiceRef(wsdlLocation = "WEB-INF/wsdl/192.168.2.128_8080/EventByte/EventAccess.wsdl")
    //private businesslogic.service.EventAccess_Service service_1;

    @WebServiceRef(wsdlLocation = "WEB-INF/wsdl/192.168.2.128_8080/EventByte/EventAccess.wsdl")
    private EventAccess_Service service;
    
    @Override
    protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
        List<Event> eventos = listaEventos();
        
        PrintWriter out= response.getWriter();
        for (Event ev : eventos){
            out.println("<h2>"+ev.getName()+"</h2>");
       }
    }
    
    private java.util.List<Event> publicEvents2() {
        ArrayList<Event> arr = new ArrayList<Event>();
        Event e1 = new Event();
        e1.setName("El evento 1111");
        arr.add(e1);
        return arr;
    }

    private List<co.edu.unal.arqsoft.messenger.servicios.Event> publicEvents() {
        //EventAccess_Service service = new EventAccess_Service();
        if (service == null)
        System.out.println("NO ESTA INSTNACIADO");
        else System.out.println("SSIIIII ESTAT");
        EventAccess port = service.getEventAccessPort();
        return port.publicEvents();
    }
    
    List<Event> listaEventos(){
        
        try { // Call Web Service Operation
            org.netbeans.j2ee.wsdl.friendseventsbpelmodule.src.friendseventsesb.FriendsEventsESBPortType port = service_1.getFriendsEventsESBPort();
            // TODO initialize WS operation arguments here
            java.lang.String email = "anfrodriguezri@unal.edu.co";
            java.lang.String password = "12345678";
            int userId = 8;
            javax.xml.ws.Holder<Boolean> authenticationSuccess = new javax.xml.ws.Holder<Boolean>();
            javax.xml.ws.Holder<businesslogic.service.GetFriendsResponse> friends = new javax.xml.ws.Holder<businesslogic.service.GetFriendsResponse>();
            javax.xml.ws.Holder<businesslogic.service.PrivateEventsResponse> privateEvents = new javax.xml.ws.Holder<businesslogic.service.PrivateEventsResponse>();
            port.friendsEventsESBOperation(email, password, userId, authenticationSuccess, friends, privateEvents);
            
            List<Event> evs = privateEvents.value.getReturn();
            return evs;
        } catch (Exception ex) {
            // TODO handle custom exceptions here
            //System.out.println(ex);
            ex.printStackTrace();
        }
        return new ArrayList<Event>();
    }
    
    
    void nada(){
        
        try { // Call Web Service Operation
            EventAccess port = service.getEventAccessPort();
            // TODO initialize WS operation arguments here
            java.lang.Integer arg0 = Integer.valueOf(0);
            java.lang.Integer arg1 = Integer.valueOf(0);
            java.lang.Integer arg2 = Integer.valueOf(0);
            // TODO process result here
            java.lang.String result = port.linkEvent(arg0, arg1, arg2);
            //out.println("Result = "+result);
        } catch (Exception ex) {
            // TODO handle custom exceptions here
        }

    }
    
}

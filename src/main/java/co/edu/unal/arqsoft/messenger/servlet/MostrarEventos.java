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
import javax.xml.ws.WebServiceRef;

/**
 *
 * @author alex
 */
@WebServlet("/mostrar-eventos")
public class MostrarEventos  extends HttpServlet {

    @WebServiceRef(wsdlLocation = "WEB-INF/wsdl/192.168.2.128_8080/EventByte/EventAccess.wsdl")
    private EventAccess_Service service;
    
    @Override
    protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
        List<Event> eventos = publicEvents();
        
        PrintWriter out= response.getWriter();
        for (Event ev : eventos){
            out.println("<h2>"+ev.getName()+"</h2>");
       }
    }
    

    private java.util.List<Event> publicEvents() {
        EventAccess_Service service = new EventAccess_Service();
        EventAccess port = service.getEventAccessPort();
        return port.publicEvents();
    }
    
    
    
}

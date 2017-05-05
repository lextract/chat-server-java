package co.edu.unal.arqsoft.messenger;

import co.edu.unal.arqsoft.messenger.security.CORSFilter;
import javax.servlet.Filter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import co.edu.unal.arqsoft.messenger.security.JwtFilter;

/**
 *
 * @author alex
 */
public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
 
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[] { AppConfig.class };
    }
  
    @Override
    protected Class<?>[] getServletConfigClasses() {
        return null;
    }
  
    @Override
    protected String[] getServletMappings() {
        return new String[] { "/auth", "/conversation", "/user", "/message" };
    }
    
    @Override
    protected Filter[] getServletFilters() {
    	Filter [] singleton = { new CORSFilter(), new JwtFilter() };
    	return singleton;
    }
}
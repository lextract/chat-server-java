package co.edu.unal.arqsoft.messenger;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author alex
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "co.edu.unal.arqsoft.messenger")
public class AppConfig {}
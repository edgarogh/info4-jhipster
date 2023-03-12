package bzh.edgar.info4coopcyclejhipster;

import bzh.edgar.info4coopcyclejhipster.CoopcycleJhipsterApp;
import bzh.edgar.info4coopcyclejhipster.config.AsyncSyncConfiguration;
import bzh.edgar.info4coopcyclejhipster.config.EmbeddedSQL;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { CoopcycleJhipsterApp.class, AsyncSyncConfiguration.class })
@EmbeddedSQL
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
public @interface IntegrationTest {
}

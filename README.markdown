# Drupal Fluent Agent Controller Module
# REQUIREMENTS

   - Agent module requires a Drupal 6.x or higher version with database MySQL[Click here](http://www.mysql.com/).

# OPTIONAL TASKS

- Agent module needs "Clean URLs" feature on an Apache web server, need the mod_rewrite module and the ability to use local .htaccess files. For Clean URLs support on IIS, see "Using Clean URLs with IIS"
  [Click here to see](http://drupal.org/node/3854)  in the Drupal handbook.

# INSTALLATION

## DOWNLOAD MODULE

   - Download the Agent module zip/tar file  from the link [Click here to download](https://github.com/netspective/fluent-drupal-module-agent-controller/zipball/master)

   - Extract the zip file with a following commands
  
      $ tar xf <fluent-drupal-module-agent-controller_name>.zip

      $ tar -zxvf <fluent-drupal-module-agent-controller_name>.zip

   - Move the extracted directory to Drupal Module Location as "fluent_agent_controller"

## INSTALL MODULE

   - Login as Admin user and navigate to Administer > Site building > Modules.

   - Check the 'Enabled' box next to the module and then click the 'Save Configuration' button at the bottom.

   - Navigate to below location:

        Administer > Site configuration > Agent Controller settings.

   - Change the hostname and Port for the websocket to listen.
    
        Administer > User management > Permissions

   - Set permission to the Users to access the module.
 
        Administer > Site building > Blocks

   -  Set the location for the module to be placed(Right,left,center)column.   

# MORE INFORMATION

- For additional documentation, see the online Drupal handbook at
  http://drupal.org/handbook.

- For Drupal module Installation
  http://drupal.org/documentation/install/modules-themes/modules-5-6



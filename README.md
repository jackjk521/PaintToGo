# PaintToGo Instructions to run project locally

##If you don't have a database administration tool and Apache
- Download XAMPP: https://www.apachefriends.org/download.html
- Install XAMPP, open as administrator and install services: Apache and MySQL
- After installing the two services, start them through their respective `Start` button 
 
cmder will be refered as console (this can be your usual windows terminal, Windows Powershell, terminal within Visual Studio Code, or Gitbash console)

Cotinue here:
- Create a database locally named `PaintToGo` (utf8_general_ci is the default, no other changes required)
- Download composer https://getcomposer.org/download/
- Pull or download project from GitHub.
- Open your console change to your project root directory (cd) and run `mv .env.example .env` )
- Open the console and cd your project root directory
- Run `composer install`
- Run `php artisan key:generate` 
- Run `php artisan migrate:fresh --seed`
- Run `php artisan serve`

#####The terminal will now provide a link to access the project (.env default: http://127.0.0.1:8000/)

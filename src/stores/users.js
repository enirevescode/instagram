import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref("")
  const validateEmail = (email) =>{
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }
//gestion connexion
  const handleLogin = () =>{
    
  }
//gestion de l'inscription

  const handleSignUp = (credentials) =>{
    // 1. info d'identification
    const {email, password, username} = credentials;
      if(password.length < 6){
        return errorMessage.value = "Le mot de passe est inférieur à 6 caractères !"
      }
      if(username.length < 4){
        return errorMessage.value = "Le nom d'utilisateur est inférieur à 4 caractères !"
      }
      if(!validateEmail(email)){
        return errorMessage.value = "Le mail n'est pas valide"
      }
      errorMessage.value ="";
  }
//gestion déconnexion
  const handleLogout = () =>{

  }
//gestion fonction utilisateur
  const getUser = () =>{

  }

  

  return { user, errorMessage, handleLogin, handleSignUp, handleLogout, getUser }
})

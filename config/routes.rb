Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :admins, only: [:create]
  post "/admin/login", to: "admin#login"
  get "/admin/verify", to: "admins#verify"

  resources :projects

  resources :endorsments
end


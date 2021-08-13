Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :admins
  post "/admin/login", to: "admins#login"
  get "/admin/verify", to: "admins#verify"

  resources :projects

  resources :comments
end


Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users
  root "home#index"

  get "/refresh" => "home#refresh"

  delete "/favorites" => "favorites#destroy"

  resources :favorites, only: [:create, :show, :index]

  devise_scope :user do
    get "sign_in", to: "devise/sessions#new"
    get "sign_up", to: "devise/registrations#new"
  end

end

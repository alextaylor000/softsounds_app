Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  root "home#index"

  get "/refresh_stream1" => "home#refresh_stream1"
  get "/refresh_stream2" => "home#refresh_stream2"

  delete "/favorites" => "favorites#destroy"

  resources :favorites, only: [:create, :show, :index]

  devise_scope :user do
    get "sign_in",  to: "devise/sessions#new"
    get "sign_up",  to: "devise/registrations#new"
    get "sign_out", to: "devise/sessions#destroy"
  end


end

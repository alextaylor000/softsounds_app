Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  root "home#index"

  get "/refresh_stream1" => "home#refresh_stream1"
  get "/refresh_stream2" => "home#refresh_stream2"

  get "/sort_artist" =>     "favorites#sort_artist"
  get "/sort_latest" =>     "favorites#sort_latest"

  delete "/favorites" => "favorites#destroy"

  resources :favorites, only: [:create, :show, :index]

  devise_scope :user do
    get "sign_in",  to: "devise/sessions#new"
    get "sign_up",  to: "devise/registrations#new"
    get "sign_out", to: "devise/sessions#destroy"
  end


end

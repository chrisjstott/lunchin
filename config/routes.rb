Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :businesses, except: [:new, :edit]
    resources :reviews, only: [:create]
    resources :openings, except: [:new, :edit, :show]
  end
end

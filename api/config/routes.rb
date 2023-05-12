Rails.application.routes.draw do
  resources :messages
  resources :posts
  get 'latest', to: 'posts#latest'
  get 'latest-message', to: 'messages#latest'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

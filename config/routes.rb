Gamepon::Application.routes.draw do
  resources :deals do
    resources :comments
  end
end

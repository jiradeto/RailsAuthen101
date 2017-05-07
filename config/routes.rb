Rails.application.routes.draw do

  namespace :web do
    root to: 'homepages#index'
  end

  namespace :admin do
    root to: 'dashboard#index'
  end

end

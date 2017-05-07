Rails.application.routes.draw do

  namespace :admin do
    root to: 'homepages#index'
  end

end

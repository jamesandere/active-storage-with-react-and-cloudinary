class ApplicationController < ActionController::API
    before_action do
        ActiveStorage::Current.host = request.base_url
      end
end

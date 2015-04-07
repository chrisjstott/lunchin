class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def sign_in(user)
    session[:token] = user.reset_session_token!
  end

  def current_user
    User.find_by_session_token(session[:token])
  end

  def sign_out(user)
    user.reset_session_token!
    session[:token] = nil
  end



end

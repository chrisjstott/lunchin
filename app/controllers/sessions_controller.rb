class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    username = user_params[:username]
    password = user_params[:password]

    @user = User.find_by_credentials(username, password)
    if @user
      User.sign_in(@user)
      render text: "signed in"
    else
      flash.now[:errors] = ["Invalid username/password"]
      render :new
    end
  end

  def destroy
    sign_out
    render text: "signed out"
  end

private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end

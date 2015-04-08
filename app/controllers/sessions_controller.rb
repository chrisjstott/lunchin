class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    email = params[:user][:email]
    password = params[:user][:password]

    @user = User.find_by_credentials(email, password)
    if @user
      sign_in(@user)
      render text: "signed in"
    else
      flash.now[:errors] = ["Invalid email/password"]
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

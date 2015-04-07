class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render text: "logged in"
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end


private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :location, :password,
                                 :email)
  end
end

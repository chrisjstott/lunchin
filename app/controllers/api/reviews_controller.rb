module Api
  class ReviewsController < ApplicationController
    def create
      @review = Review.new(review_params)
      @review.author_id = current_user.id

      if @review.save
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def review_params
      params.require(:review).permit(:rating, :body, :business_id)
    end
  end
end

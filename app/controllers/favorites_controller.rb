class FavoritesController < ApplicationController

    before_action :authenticate_user!

    def index
      song = Song.find_by_track(params[:track])
      if song && song.favorited_by(current_user)
        render json: {favorited: true}
      else
        render json: {favorited: false}
      end
    end

    def create
      song = Song.find_by_track(params[:track])
      unless song
        song = Song.create( track:  params[:track],
                            artist: params[:artist])
      end
      favorite = Favorite.new
      favorite.user = current_user
      favorite.song = song
      favorite.save
      respond_to do |format|
      format.js { render :fav_confirm }
      end
    end


      def destroy
      song = Song.find_by_track(params[:track])
      #favorite = current_user.favorites.find(params[:id])
      favorite = current_user.favorites.find_by(song: song)
      if favorite
      respond_to do |format|
        favorite.destroy
        format.js { render :fav_delete}
      end
     end
    end

    def sort_artist
      respond_to do |format|
        format.js { render :sort_artist}
      end
    end

    def sort_latest
      respond_to do |format|
        format.js { render :sort_latest}
      end
    end

end

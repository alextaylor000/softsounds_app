class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :artist
      t.string :track
      t.string :artist_link
      t.string :track_link

      t.timestamps null: false
    end
    add_index :songs, :artist
    add_index :songs, :track
  end
end

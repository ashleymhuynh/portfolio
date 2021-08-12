class ChangeEndorsmentsToComments < ActiveRecord::Migration[6.1]
  def change
    rename_table :endorsments, :comments
  end
end

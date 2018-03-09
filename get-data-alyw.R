###############################################################################
#                                                                             #
#                                                                             #
#                                                                             #
###############################################################################
# TODO: 
# Faire en sorte que les credential soient lus depuis un fichier externe pour
# que le fichier .js et ce script utilisent les mêmes infos. 
# 
# Packages --------------------------------------------------------------------

library(reticulate) # Interface R <> Python
library(tidyverse) 
library(magrittr)
library(jsonlite)   # Pour parser les colonnes contenant plusieurs essais
library(glue)       # Helper pour les parties où le texte est concaténé

# importing keen.io python api ------------------------------------------------
# Nécessité d'installer keen client dans un environnement anaconda pour que 
# ça fonctionne.
# 
# https://github.com/keenlabs/KeenClient-Python


keen_library <- import("keen.client")

# Remplacer les clés par les clés de sécurité et l'id du projet sur keen.io

keen_client <- 
  keen_library$KeenClient(
    project_id = "XXX",
    read_key = "XXX")


# Get data from keen python API -----------------------------------------------
# Ici la fonction permet d'extraire les données contenues dans un stream.
# Le nom du stream se spécifie avec l'argument event_collection.

keen_session   <- 
  keen_client$extraction(event_collection = "session_id",
                         timeframe = "this_month")

keen_iat_trial_raw <- 
  keen_client$extraction(event_collection = "iat_trial",
                         timeframe = "this_month")


# Data wrangling --------------------------------------------------------------
# session ---------------------------------------------------------------------
# vaast_trial -----------------------------------------------------------------
# iat_trial -------------------------------------------------------------------
# Lecture du code au format : 
# 1.
# 2.
# 3.

keen_iat_trial_meta <- 
  keen_iat_trial_raw %>%
  map_df(~ data_frame(keen_id        = .x$keen$id,
                      keen_timestamp = .x$keen$timestamp,
                      session_id     = .x$session_id,
                      iat_trial_data = .x$trial_data),
         .id = "index") 

# 1. On crée keen_iat_trial_meta
# 2. depuis keen_iat_trial_raw
# 3. Pour chaque ligne de keen_iat_trial_raw on crée un jeu de données
# 4. 
# 5.    avec les colonnes keen_id, keen_timestamp,
# 6.    session_id, iat_trial_data
# 7.

keen_iat_trial_data <-
  keen_iat_trial_meta %>% 
  pull(iat_trial_data) %>% 
  map_df(~fromJSON(.x),
         .id = "index")

# 1. On crée keen_iat_trial_data
# 2. Pour ça, on recupère dans keen_iat_trial_meta
# 3. la colonne iat_trial_data
# 4. Pour chaque élément de cette colonne, on crée un jeu de donnée en parsant le contenu JSON
# 5.   

tidy_iat_trial <-
  keen_iat_trial_meta %>% 
  select(-iat_trial_data) %>% 
  left_join(keen_iat_trial_data, 
            by = "index")

# 1. On crée tidy_iat_trial
# 2. Pour ça, on recupère keen_iat_trial_meta
# 3. On enlève la variable iat_trial_data,
# 4. Et on colle keen_iat_trial_data
# 5. 

write_csv(
  tidy_iat_trial, 
  path = glue("data/{lubridate::today()}_iat_data.csv")
)
